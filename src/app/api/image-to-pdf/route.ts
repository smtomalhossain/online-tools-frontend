import { PDFDocument } from "pdf-lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files") as File[];

  const pdfDoc = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const imageBytes = new Uint8Array(arrayBuffer);
    let image;
    const margin = 20;

    if (file.type === "image/jpeg" || file.type === "image/jpg") {
      image = await pdfDoc.embedJpg(imageBytes);
    } else {
      image = await pdfDoc.embedPng(imageBytes);
    }

    const dimensions = image.scale(1);

    const pageWidth = dimensions.width + margin * 2;
    const pageHeight = dimensions.height + margin * 2;

    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    page.drawImage(image, {
      x: margin,
      y: margin,
      width: dimensions.width,
      height: dimensions.height,
    });
  }

  const pdfBytes = await pdfDoc.save();

  return new NextResponse(pdfBytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=image-to-pdf.pdf",
    },
  });
}

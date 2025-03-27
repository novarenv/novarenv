import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const certificationsDir = path.join(process.cwd(), 'public/certifications');
  const fileNames = fs.readdirSync(certificationsDir);
  
  const images = fileNames.map(fileName => ({
    src: `/certifications/${fileName}`,
    alt: fileName.replace(/\.[^/.]+$/, "") // Remove file extension for alt text
  }));
  
  return NextResponse.json(images);
}
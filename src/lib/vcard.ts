export interface VCardData {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  phone: string;
  email: string;
  address?: string;
  website?: string;
  linkedin?: string;
}

export function generateVCF(data: VCardData): string {
  const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${data.firstName} ${data.lastName}
N:${data.lastName};${data.firstName};;;
ORG:${data.organization}
TITLE:${data.title}
TEL;TYPE=CELL:${data.phone}
EMAIL:${data.email}
${data.address ? `ADR:;;${data.address};;;;` : ''}
${data.website ? `URL:${data.website}` : ''}
${data.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}` : ''}
END:VCARD`;

  return vcfContent;
}

export function downloadVCF(data: VCardData, filename: string = 'contact.vcf'): void {
  const vcfContent = generateVCF(data);
  const blob = new Blob([vcfContent], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function maskCPF(value: string) {
  let masked = value.replace(/\D/g, '');

  if (masked.length > 3) {
    masked = masked.replace(/^(\d{3})(\d)/, '$1.$2');
  }

  if (masked.length > 7) {
    masked = masked.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  }

  if (masked.length > 11) {
    masked = masked.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }

  return masked;
}

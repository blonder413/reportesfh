export class DateFormatter {
  static formatter = new Intl.DateTimeFormat('es-Es', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  /**
   * Formatea la fecha de manera legible para humanos
   *
   * @param {Date} date - Fecha a formatear.
   * @returns {string} Fecha en formato legible.
   */
  static getHumanDate(date: Date = new Date()): string {
    return this.formatter.format(date);
  }
}

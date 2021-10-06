export class AppError extends Error {
  constructor (message, status, data) {
    super(message)
    this.status = status || 500
    this.data = data
    this.name = 'Apperror'
    this.date = new Date()
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError)
    }
  }
}

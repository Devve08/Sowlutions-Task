export const dateFormat = (date: string) => {
    let newDate = new Date(date)

    return newDate.toDateString()
}
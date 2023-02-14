export interface IModal {
    title: string
    show: boolean
    ref: any
    onClose: (value: boolean) => void
}

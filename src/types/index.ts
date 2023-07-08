export interface CategoriesDirectoryItemProps {
    id: number;
    imageUrl: string;
    title: string;
}
export interface DirectoryComponentProps {
    data: CategoriesDirectoryItemProps[]
}
export interface SignUpFieldProps {
    display_name: string;
    email: string;
    password: string;
    confirm_password: string;
}
export interface SignInFieldProps {
    email: string;
    password: string;
}


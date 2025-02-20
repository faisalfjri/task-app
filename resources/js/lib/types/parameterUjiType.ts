export interface parameterUjiType {
    id: number;
    label: string;
    category: string;
    show: number;
    created_at: string | null;
    updated_at: string | null;
}

export type GroupedData = {
    title: string;
    data: parameterUjiType[];
};

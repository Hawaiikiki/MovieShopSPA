export interface PagedResultSet {
    pageIndex:       number;
    pageSize:        number;
    totalPages:      number;
    totalRowCount:   number;
    data:            Datum[];
    hasPreviousPage: boolean;
    hasNextPage:     boolean;
}

export interface Datum {
    id:        number;
    title:     string;
    posterUrl: string;
}

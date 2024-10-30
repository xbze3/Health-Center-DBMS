import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: React.FormEvent) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({
    searchQuery,
    onSearchChange,
    onSearchSubmit,
}) => (
    <Form className="d-flex m-3" onSubmit={onSearchSubmit}>
        <Form.Control
            type="search"
            placeholder="SQL Search Query"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={onSearchChange}
        />
        <Button variant="outline-success" type="submit">
            Search
        </Button>
    </Form>
);

export default SearchBarComponent;

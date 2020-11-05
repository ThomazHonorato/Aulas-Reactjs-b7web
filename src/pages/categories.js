import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Categories(){

    let query = useQuery();
    let cat = query.get('type');
    let subtype = query.get('subtype');

    return (
        <div>
            <h4>Página de Categories</h4>
            Exibindo itens da categoria: {cat}: {subtype}
        </div>
    );
}

export default Categories;
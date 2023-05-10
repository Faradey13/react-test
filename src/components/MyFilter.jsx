import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/MySelect";

const MyFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={ e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                options={[
                    {value: 'title', name: 'По заголовку'},

                ]}
                value={filter.sort}
                deflautValue={'Сортировка'}
                onChange={sort => setFilter({...filter, sort: sort})} />

        </div>
    );
};

export default MyFilter;
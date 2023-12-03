import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import QuoteDetails from './CompanyQuote/QuoteDetails';
import Search from '@/Components/Search';
import { useState, useEffect } from 'react';
import api from '@/Utils/api';

export default function Quote({ auth }) {
    const [quote, setQuote] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('No Company Found');
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (symbol) => {
        setEmptyMessage('Loading Company...')
        setIsLoading(true)

        if (!symbol || !symbol.trim()) {
            setQuote([])
        } else {
            const result = await api.getData(`financial/quote/${symbol}`);
            setQuote(result);
        }

        setEmptyMessage('No Company Found')
        setIsLoading(false)
    };

    const searchHandler = (symbol) => {
        console.log(symbol)
        fetchData(symbol)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search Company Quote</h2>}
        >
            <Head title="Search Company Quote" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex pb-4">
                            <div className="flex-grow"></div>
                            <Search className="w-1/3 ml-auto" searchHandler={searchHandler} />
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {
                                quote.length !== 0 && !isLoading ?
                                (<QuoteDetails quote={quote}/>) 
                                : 
                                (emptyMessage)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

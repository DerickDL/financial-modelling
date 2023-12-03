import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Search from '@/Components/Search';
import ProfileDetails from './CompanyProfile/ProfileDetails';
import api from '@/Utils/api';
import { useEffect, useState } from 'react';


export default function Profile({ auth }) {
    const [profile, setProfile] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState('No Company Found');
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (symbol) => {
        setEmptyMessage('Loading Company...')
        setIsLoading(true)

        if (!symbol || !symbol.trim()) {
            setProfile([]);
        } else {
            const result = await api.getData(`financial/profile/${symbol}`)
            setProfile(result);
        }

        setEmptyMessage('No Company Found')
        setIsLoading(false)
    };

    const searchHandler = (symbol) => {
        fetchData(symbol)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search Company Profile</h2>}
        >
            <Head title="Search Company Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex pb-4">
                        <div className="flex-grow"></div>
                        <Search className="w-1/3 ml-auto" searchHandler={searchHandler}/>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {
                                profile.length !== 0 && !isLoading ? 
                                (<ProfileDetails profile={profile}/>) 
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

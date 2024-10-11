import React from 'react';
import ProjectList from './ProjectList';

import PaymentList from './PaymentList';
import EarningsChart from './EarningChart';

const Dashboard = () => {

    const initialProjects = [
        { name: 'Project 1', dueDate: '2024-11-15', status: 'Active' },
        { name: 'Project 2', dueDate: '2024-12-01', status: 'Completed' },
    ];

    const earningsData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        values: [1200, 1900, 3000, 5000, 2000],
    };

    const initialPayments = [
        { amount: 500, status: 'Unpaid' },
        { amount: 1000, status: 'Paid' },
        { amount: 300, status: 'Unpaid' },
    ];

    return (
        <div  style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '10px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProjectList initialProjects={initialProjects} />
                    </div>
                </div>
                <div className="d-flex mt-5">
                    <div className="col-md-6">
                        <PaymentList initialPayments={initialPayments} />
                    </div>
                    <div className="col-md-6">
                        <EarningsChart earningsData={earningsData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

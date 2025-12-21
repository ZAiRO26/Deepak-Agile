import React from 'react';

const Clients: React.FC = () => {
    const clients = [
        { name: 'Microsoft', logoPlaceholder: 'MS' },
        { name: 'Amazon', logoPlaceholder: 'AM' },
        { name: 'Google', logoPlaceholder: 'GO' },
        { name: 'IBM', logoPlaceholder: 'IBM' },
        { name: 'Accenture', logoPlaceholder: 'AC' },
        { name: 'Deloitte', logoPlaceholder: 'DE' },
        { name: 'TCS', logoPlaceholder: 'TCS' },
        { name: 'Infosys', logoPlaceholder: 'IF' },
    ];

    return (
        <section className="py-16 bg-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                        Trusted By
                    </p>
                    <h2 className="font-display text-2xl font-bold text-charcoal">
                        Industry Leaders & Fortune 500 Companies
                    </h2>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
                    {clients.map((client, index) => (
                        <div
                            key={client.name}
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-xl shadow-soft flex items-center justify-center text-xl font-bold text-muted group-hover:text-accent group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                                {client.logoPlaceholder}
                            </div>
                            <span className="mt-2 text-xs font-medium text-muted group-hover:text-charcoal transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Trust Statement */}
                <div className="text-center mt-12">
                    <p className="text-slate">
                        Delivering enterprise agile transformation across <span className="font-bold text-charcoal">50+ organizations</span> worldwide
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Clients;

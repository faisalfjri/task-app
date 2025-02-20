import React, { ReactNode } from 'react';

interface Item {
    label: string;
    value: string | number | null | undefined | ReactNode;
    isDate?: boolean;
}

interface DescriptionsProps {
    items: Item[];
}

const Descriptions: React.FC<DescriptionsProps> = ({ items }) => {
    return (
        <dl className="divide-y divide-gray-200 rounded-lg border border-gray-200">
            {items.map(({ label, value }, index) => (
                <div
                    key={index}
                    className="py-2.5 sm:grid sm:grid-cols-3 sm:divide-x sm:py-0"
                >
                    <dt
                        className={`px-4 py-0 text-sm/6 text-gray-600 sm:bg-gray-50 sm:py-4 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === items.length - 1 ? 'rounded-bl-lg' : ''}`}
                    >
                        {label}
                    </dt>
                    <dd className="px-4 py-0 text-sm/6 font-medium text-gray-900 sm:col-span-2 sm:mt-0 sm:py-4">
                        {value || '-'}
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default Descriptions;

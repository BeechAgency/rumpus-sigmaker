import { useEffect, useState } from "react";

const CentreAddresses = ( { returnAddress, currentAddress = 'Chatham St' } ) => {
    // create state for addresses
    const [addresses, setAddresses] = useState([
        {
            order: 1,
            location : 'Chatham St',
            address : '121 Chatham St, Broadmeadow',
        },
        {
            order: 2,
            location : 'Darling St',
            address : '90 Darling St, Broadmeadow',
        },
        {
            order: 3,
            location : 'Pelican',
            address : '4 Karoburra St, Pelican',
        },
        {
            order: 4,
            location : 'Charlestown',
            address : '4 St Albans Close, Charlestown',
        },
        {
            order: 5,
            location : 'Marks Point',
            address : '2A Reid St, Marks Point',
        },
        {
            order: 6,
            location : 'Warabrook',
            address : '5 Rosegum Rd, Warabrook',
        },
        {
            order: 7,
            location : 'Other',
            address : '2/21 Bolton St, Newcastle',
        },
    ]);

    const handleAddressChange = (e) => {
        // get the value of the selected address
        const address = e.target.value;
        const location = e.target.dataset.location;
        const order = e.target.dataset.order;

        console.log(address, location, order);
        // set the return address

        // filter the addresses to remove the selected address
        const filteredAddresses = [];

        addresses.map( (item) => {
            console.log(item);
            if(item.location !== location) {
                filteredAddresses.push(item);
            }
        });

        filteredAddresses.push({ location, address, order });

        filteredAddresses.sort((a, b) => (a.order > b.order) ? 1 : -1);

        console.log(filteredAddresses);

        setAddresses(filteredAddresses )
    };

    useEffect(() => {
        returnAddress(addresses[2].address);
    });
    

    return (
        <div className="centre-addresses inputGroup-group">
            {addresses.map( (address, index) => {
                return(
                    <div className="address inputGroup" key={index}>
                        <label htmlFor={address.location}>{address.location}</label>
                        <textarea type="text" data-location={address.location} data-order={address.order} name="address" onChange={handleAddressChange} defaultValue={address.address}></textarea>
                    </div>
                )
                })
            }
        </div>
    );
}

export default CentreAddresses;
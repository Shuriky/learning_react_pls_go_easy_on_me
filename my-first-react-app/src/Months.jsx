function mapMonth(month, index) {
    return <li key={index}>{month}</li>;
}

function Months() {
    const monthList = ["Jan", "Feb", "Mar", "Apr"];

    return (
        <ul>
            {monthList.map(mapMonth)}
        </ul>
    );  
}

export default Months;
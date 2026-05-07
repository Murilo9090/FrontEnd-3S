const Card = ({ children }) => {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                margin: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                backgroundColor: "#f9f9f9"
            }}
        >
            {children}
        </div>
    )
}

export default Card
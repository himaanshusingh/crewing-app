import { useLocation, useNavigate } from "react-router-dom";

export default function Crew() {
  const location = useLocation();
  const navigate = useNavigate();

  const crew = location.state?.crew?.data;

  if (!crew) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>No Data found</h2>
        <button
          onClick={() => navigate("/login")}
          className="w-35 mt-3 py-3.5 bg-blue-600 text-white border-none rounded-lg text-[15px] font-semibold cursor-pointer"
        >
          Go back to login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1>{crew.name || "crew Details"}</h1>
        <p style={{ color: "#555" }}>ID: {crew._id || crew.id || "N/A"}</p>
      </header>

      <section
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1.5rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Email: </strong>
          <span>{crew.email || "Not provided"}</span>
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Contact Person: </strong>
          <span>{crew.contactPerson || "Not provided"}</span>
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Phone: </strong>
          <span>{crew.phone || "Not provided"}</span>
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Address: </strong>
          <span>{crew.address || "Not provided"}</span>
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <strong>Created At: </strong>
          <span>
            {crew.createdAt
              ? new Date(crew.createdAt).toLocaleString()
              : "Unknown"}
          </span>
        </div>

        {/* if backend returns any other fields, show them generically */}
        {crew.status && (
          <div style={{ marginBottom: "0.75rem" }}>
            <strong>Status: </strong>
            <span>{crew.status}</span>
          </div>
        )}
      </section>
    </div>
  );
}

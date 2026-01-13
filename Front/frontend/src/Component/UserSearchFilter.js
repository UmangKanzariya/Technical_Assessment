import React, { useEffect, useMemo, useState } from "react";

export default function UserSearchFilter() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        if (!ignore) setUsers(data.slice(0, 10));
      } catch (err) {
        console.error(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchUsers();
    return () => {
      ignore = true;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;

    return users.filter((u) => {
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
      );
    });
  }, [query, users]);

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h2>Dynamic Search Filter</h2>

      <input
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
        placeholder="Search by name or email..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "8px",
              }}
            >
              <b>{user.name}</b>
              <div>{user.email}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

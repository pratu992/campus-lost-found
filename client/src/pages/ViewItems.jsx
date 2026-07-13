import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaSearch,
  FaBoxOpen,
  FaFilter,
} from "react-icons/fa";

import AuthBackground from "../components/AuthBackground";
import Navbar from "../components/dashboard/Navbar";
import ItemCard from "../components/ItemCard";
import EditItemModal from "../components/EditItemModal";

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get("https://campus-lost-found-244q.onrender.com/api/items");
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const markReturned = async (id) => {
    try {
      await axios.put(`https://campus-lost-found-244q.onrender.com/api/items/${id}/return`);
      fetchItems();
    } catch (err) {
      console.error(err);
      alert("Failed to update item.");
    }
  };

  const deleteItem = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`https://campus-lost-found-244q.onrender.com/api/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
      alert("Failed to delete item.");
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    const matchesType =
      type === "All" || item.type === type.toLowerCase();

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <AuthBackground>
      <div className="min-h-screen text-white">

        <Navbar user={user} />

        <main className="mx-auto w-full max-w-7xl px-6 lg:px-10 py-10">

          {/* Hero */}

          <section className="mb-10 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl">
                <FaBoxOpen className="text-3xl text-white" />
              </div>

              <div>

                <h1 className="text-5xl font-bold">
                  View Reported Items
                </h1>

                <p className="mt-2 text-lg text-slate-300">
                  Browse, search and manage all lost and found reports.
                </p>

              </div>

            </div>

          </section>

          {/* Search & Filters */}

          <section className="mb-10 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-xl">

            <div className="grid gap-6 lg:grid-cols-4">

              {/* Search */}

              <div className="relative lg:col-span-2">

                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search items..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-slate-400 outline-none focus:border-cyan-400"
                />

              </div>

              {/* Category */}

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
              >
                <option value="All">All Categories</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Wallet</option>
                <option>Keys</option>
                <option>ID Card</option>
                <option>Bag</option>
                <option>Watch</option>
                <option>Others</option>
              </select>

              {/* Type */}

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
              >
                <option value="All">All Types</option>
                <option>Lost</option>
                <option>Found</option>
              </select>

            </div>

            {/* Statistics */}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/5 px-6 py-4">

              <div className="flex items-center gap-3">

                <FaFilter className="text-cyan-400" />

                <span className="text-slate-300">
                  Showing
                  <span className="ml-2 font-bold text-white">
                    {filteredItems.length}
                  </span>
                  {" "}of{" "}
                  <span className="font-bold text-cyan-400">
                    {items.length}
                  </span>
                  {" "}items
                </span>

              </div>

            </div>

          </section>
                    {/* Items */}

          {filteredItems.length === 0 ? (

            <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl py-20 text-center shadow-2xl">

              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                <FaBoxOpen className="text-5xl text-cyan-400" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                No Items Found
              </h2>

              <p className="mt-3 text-slate-400">
                Try changing your search or filter options.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

             {filteredItems.map((item) => {

  const isOwner = item.createdBy === user.id;

  return (
    <ItemCard
      key={item._id}
      item={item}
      onReturn={isOwner ? markReturned : null}
      onEdit={isOwner ? openEditModal : null}
      onDelete={isOwner ? deleteItem : null}
    />
  );

})}
            </div>

          )}

          {/* Edit Modal */}

          <EditItemModal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={closeEditModal}
            onUpdate={fetchItems}
          />

        </main>

      </div>

    </AuthBackground>
  );
};

export default ViewItems;
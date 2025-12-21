import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = "Search by name, specialty, or skill..." }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:border-moto-red focus:outline-none rounded"
      />
    </div>
  );
};

export default SearchBar;

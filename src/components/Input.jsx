
const Input = ({type, placeholder, onChange, value}) => {
  return (
    <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
  )
}

export default Input
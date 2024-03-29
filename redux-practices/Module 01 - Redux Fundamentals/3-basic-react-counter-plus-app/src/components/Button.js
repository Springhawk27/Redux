export default function Button({ children, handler }) {
    return (
        <button
            class="bg-blue-400 text-white px-3 py-2 rounded shadow"
            onClick={handler}
        >
            {children}
        </button>
    );
}

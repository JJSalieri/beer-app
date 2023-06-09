export default function Spinner(){
    return (
      <div className="w-full flex justify-center h-[50vh] items-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <span className="absolute mt-16 pt-4">Loading ...</span>
      </div>
    );
}
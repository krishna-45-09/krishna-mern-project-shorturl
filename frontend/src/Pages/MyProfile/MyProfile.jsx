
export default function MyProfile () {
    return (
        <div>
            Krishnakanth 
            ECE 
        </div>
    )
}

// const Profile = () => {
//   const [data, setData] = useState(null); // start with null
//   const service = new Service();

//   const getData = async () => {
//     try {
//       const response = await service.get("user/me");
//       console.log("Response:", response);
//       setData(response);
//     } catch (err) {
//       console.error("Profile fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []); // run only once

//   if (!data) return <div>Loading...</div>; // wait until data is loaded

//   return (
//     <div>
//         <p><img src={data.avatar} alt={data.name} width={150} /></p>
//       <h1>{data.name}</h1>
//       <p>Email: {data.email}</p>
//       {/* render other fields as needed */}
//     </div>
//   );
// };
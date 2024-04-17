// name,
// coupleImage,
// fatherName,
// motherName,
// address,
// sonOrder,
// gender,
import maleCoupleImage from "../assets/images/maleCouple.jpeg";
import femaleCoupleImage from "../assets/images/femaleCouple.jpeg";
import CoupleCard from "./CoupleCard";

export default function WeddingCoupleCard() {
  const coupleData = [
    {
      coupleImage: maleCoupleImage,
      name: "I Gede Arinata",
      fatherName: "I Made Subrata",
      motherName: "Ni Wayan Puspa",
      address: "Br dinas pakudansih, muncan, selat, karangasem",
      sonOrder: 1,
      gender: "Putra",
    },
    {
      coupleImage: femaleCoupleImage,
      name: "Ni Luh Sulastriani",
      fatherName: "I Made Riasa",
      motherName: "Ni Wayan Radi, alm",
      address: "Buleleng, Tamblang, Kubutambahan",
      sonOrder: 1,
      gender: "Putri",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 container mt-24">
      {coupleData.map((couple, index) => (
        <CoupleCard
          key={index}
          coupleImage={couple.coupleImage}
          name={couple.name}
          fatherName={couple.fatherName}
          motherName={couple.motherName}
          address={couple.address}
          sonOrder={couple.sonOrder}
          gender={couple.gender}
        />
      ))}
    </div>
  );
}

import PropTypes from "prop-types";
export default function CoupleCard({
  name,
  coupleImage,
  fatherName,
  motherName,
  address,
  sonOrder,
  gender,
}) {
  return (
    <div className="flex flex-col  bg-[#fef0ed] rounded-2xl border-white border-2 shadow-lg">
      <img src={coupleImage} alt="null" className="rounded-2xl" />
      <div className="flex px-4 py-4 flex-col gap-4 pt-8">
        <div>
          <p className="font-meddons text-2xl md:text-5xl text-brown">{name}</p>
        </div>

        <div className="flex gap-2 ">
          <p className="font-thin">
            {gender} ke {sonOrder} dari Pasangan :{" "}
          </p>
          <p className="font-popins">{fatherName}</p>

          <p className="font-popins">{motherName}</p>
        </div>

        <p className="font-thin">{address}</p>
      </div>
    </div>
  );
}

CoupleCard.propTypes = {
  name: PropTypes.string.isRequired,
  fatherName: PropTypes.string.isRequired,
  motherName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  sonOrder: PropTypes.number.isRequired,
  coupleImage: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(["putra", "putri"]).isRequired,
};

import CheckDeliveryPincode from "./CheckDeliveryPincode";

function OtherDetails({ prod }) {
  return (
    <section className="w-full">
      <div className="flex items-start justify-start gap-32">
        <span className="font-semibold text-neutral-600 text-lg w-8">
          Delivery
        </span>
        <CheckDeliveryPincode />
      </div>
      <div className="flex items-start gap-32 mt-12">
        <span className="font-semibold text-neutral-600 text-lg w-8">
          Description
        </span>
        <div className=" font-semibold text-lg mr-16">{prod?.description}</div>
      </div>
      <div className="flex items-start gap-32 mt-12">
        <span className="font-semibold text-neutral-600 text-lg w-8">
          Seller
        </span>
        <div className="text-indigo-900 font-semibold text-lg mr-16 uppercase">
          {prod?.seller?.name}
        </div>
      </div>
    </section>
  );
}

export default OtherDetails;

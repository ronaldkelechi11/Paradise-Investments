import PlanItem from "./PlanItem"

const Plans = () => {

    return (
        <div id="plans" className="w-screen bg-white flex flex-col gap-3 p-2 md:p-5">
            <div className="text-black font-extrabold uppercase text-3xl md:text-6xl text-center font-poppins">Investment Plans</div>
            <div className="text-gray-400 text-lg text-center font-poppins">Below are the various investment plans that we provide for all our clients.</div>

            <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 content-center gap-3 pt-5 pb-5">
                <PlanItem name={"Basic Package"} percentage={"20%"} minimum={"50"} maximum={"299"}
                    duration={"24"} refferal={"5%"} />

                <PlanItem name={"Regular Package"} percentage={"50%"} minimum={"300"} maximum={"599"} duration={"48"} refferal={"5%"} />

                <PlanItem name={"Premium Package"} percentage={"80%"} minimum={"600"} maximum={"1,499"} duration={"72"} refferal={"10%"} />

                <PlanItem name={"VIP Package"} percentage={"100%"} minimum={"2,000"} maximum={"4,999"} duration={"96"} refferal={"10%"} />
            </div>
        </div>
    )
}

export default Plans

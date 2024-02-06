// utils
import { getPersonDetails } from "@/app/utils/movies";

// types
import { Person } from "@/app/types/person";
import MovieCard from "@/app/components/MovieCard";

interface PersonDetailsProps {
    params: any;
}

export default async function PersonDetails({ params }: PersonDetailsProps) {
    let { id } = params;
    id = Number(id);

    const personDetails: Person = await getPersonDetails(id);

    const movies = personDetails?.credits?.cast;

    const now = new Date().getFullYear();
    const age = now - Number(personDetails?.birthday?.slice(0, 4));

    return (
        <>
            <div className="flex flex-col D:flex-row D:flex-wrap justify-center items-center gap-8 pt-24 lg:px-8 ">
                <div className="flex flex-col items-center gap-2">
                    {personDetails?.profile_path ? (
                        <img
                            className="w-[250px] rounded-lg"
                            src={`https://www.themoviedb.org/t/p/w1280/${personDetails.profile_path}`}
                            alt="Photo"
                        />
                    ) : (
                        <div className="w-[280px] md:w-[230px] h-[345px] bg-main/30 rounded-xl shadow cursor-pointer"></div>
                    )}
                    <h1 className="font-bold text-2xl D:text-3xl md:text-4xl">
                        {personDetails.name}
                    </h1>
                </div>
                <div className="flex flex-col gap-6">
                    <>
                        {personDetails.known_for_department && (
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#a9a9a9] font-medium text-lg">
                                    Known for:
                                </h4>
                                <span className="">
                                    {personDetails.known_for_department}
                                </span>
                            </div>
                        )}
                    </>
                    <>
                        {personDetails.birthday && (
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#a9a9a9] font-medium text-lg">
                                    Date of birth:
                                </h4>
                                <span className="flex items-center gap-2">
                                    {personDetails.birthday}{" "}
                                    <>
                                        {personDetails.deathday ? (
                                            ""
                                        ) : (
                                            <>(age {age})</>
                                        )}
                                    </>
                                </span>
                            </div>
                        )}
                    </>
                    <>
                        {personDetails.deathday && (
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#a9a9a9] font-medium text-lg">
                                    Date of death:
                                </h4>
                                <span className="flex items-center gap-2">
                                    {personDetails.deathday}{" "}
                                    <span>
                                        (age{" "}
                                        {Number(
                                            personDetails.deathday.slice(0, 4)
                                        ) -
                                            Number(
                                                personDetails.birthday.slice(
                                                    0,
                                                    4
                                                )
                                            )}
                                        )
                                    </span>
                                </span>
                            </div>
                        )}
                    </>
                    <>
                        {personDetails.place_of_birth && (
                            <div className="flex flex-col items-center">
                                <h4 className="text-[#a9a9a9] font-medium text-lg">
                                    Place of birth:
                                </h4>
                                <span className="">
                                    {personDetails.place_of_birth}
                                </span>
                            </div>
                        )}
                    </>
                </div>
            </div>
            <p className="py-9 mx-auto text-center font-medium text-[#a9a9a9] px-2 max-w-[450px] md:max-w-[700px]">
                {personDetails.biography}
            </p>
            <div className="flex flex-col items-center justify-center gap-8 py-20">
                <h1 className="font-bold text-3xl md:text-5xl text-center">
                    You can see him in
                </h1>
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 gap-y-8 px-2">
                    {movies?.slice(0, 10).map((data: any) => (
                        <MovieCard key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </>
    );
}

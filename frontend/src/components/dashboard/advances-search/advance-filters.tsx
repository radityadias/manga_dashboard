import {Form} from "@/components/ui/form";
import FilterDropdown from "@/components/dashboard/advances-search/filter-dropdown";

const filterDropdownData = [
    {
        name: "sortBy",
        label: "Sort By",
        value: ["most watches", "best ratings", "most follows", "Latest Uploads", "Oldest Uploads" ],
    },
    {
        name: "genre",
        label: "Genres",
        value: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller", "Western" ],
    },
    {
        name: "status",
        label: "Status",
        value: ["Completed", "Ongoing", "Dropped", "Plan to Watch", "Re-watching" ],
    },
    {
        name: "rating",
        label: "Rating",
        value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ],
    },
    {
        name: "language",
        label: "Languages",
        value: ["Indonesia", "English", "Thailand", "Vietnam", "Japan", "Korea", "China"],
    }
]

export default function AdvanceFilters ({form, dropdownOpen, onSubmit}: { form: any, dropdownOpen: boolean, onSubmit: any}) {
    return (
        <>
            {dropdownOpen && (
                <div className="w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                                {filterDropdownData.map((data) => (
                                    <FilterDropdown label={data.label} options={data.value} name={data.name} form={form} key={data.name} />
                                ))}
                            </div>
                        </form>
                    </Form>
                </div>
            )}
        </>
    )
}
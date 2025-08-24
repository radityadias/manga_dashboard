import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function SearchBar({form, onSubmit}: { form: any, onSubmit: any}) {
    return (
        <>
            <div className="w-full">
                <Form {...form}>
                    <form id="search-form" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name="query"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Search anything..."
                                                className="pl-10 bg-main-foreground text-white border-none focus-visible:ring-[1px] focus-visible:ring-yellow-primary/50"
                                                {...field}
                                            />
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white w-4 h-4"/>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
            <div className="w-64">
                <Button variant="main" className="w-full" type="submit" form="search-form">
                    Search
                </Button>
            </div>
        </>

    )
}
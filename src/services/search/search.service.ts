import { SearchResult } from "../../model/search-result.model";
import { supabase } from "../api/supabase";

export const search = async (query: string): Promise<SearchResult[]> => {
    
    const {data, error} = await supabase.from<SearchResult>('main')
    .select()
    .or(`title.ilike.%${query}%`)
    .or(`description.ilike.%${query}%`)
    .or(`keyword.ilike.%${query}%`)
    .limit(10);
    
    return data || [];
}
import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

export default async function DashBoardPage(){
    const {isAuthenticated,getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user) return redirect('/login');
    return(
        <div>Hey {user.given_name}</div>
        
    )
}
import { currentUser } from "@clerk/nextjs/server"

async function Sidebar() {
    const authUser = await currentUser();
    if(!authUser) return (
        <UnAuthenticatedSidebar />;
    )

    return ()
}

const UnAuthenticatedSidebar = () => (
    <div>
        <Card>
    </div>
) 

export default Sidebar
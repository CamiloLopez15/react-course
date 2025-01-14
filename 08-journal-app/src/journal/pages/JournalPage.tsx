import NothingSelectedView from "../views/NothingSelectedView";
import JournalLayout from "../layout/JournalLayout";
// import NoteView from "../views/NoteView";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

function JournalPage() {
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    position: "fixed",
                    bottom: 50,
                    right: 50,
                    transitionDuration: "0.3s",
                    transitionProperty: "all",
                    ":hover": {
                        backgroundColor: "error.main",
                        opacity: 0.9,
                    },
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
}

export default JournalPage;

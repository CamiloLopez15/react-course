// import NothingSelectedView from "../views/NothingSelectedView";
import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";

function JournalPage() {
    return (
        <JournalLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />
        </JournalLayout>
    );
}

export default JournalPage;

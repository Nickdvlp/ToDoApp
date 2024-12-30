import { useState } from "react";

const ToDoItem = ({ Notetext, EditText, DeleteText, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState({ id: "", text: "" });
  // const [isCompleted, setIsCompleted] = useState(false);

  const handleEdit = () => {
    EditText(newText.id, newText.text);
    setIsEditing(false);
  };

  return isEditing ? (
    <div className="mt-5 flex flex-wrap flex-col justify-center items-center gap-3 w-full">
      <textarea
        className=" h-full min-h-[100px] w-5/6 resize-none rounded-xl  px-3 py-2.5"
        value={newText.text}
        onChange={(e) => setNewText({ ...newText, text: e.target.value })}
      />
      <button onClick={handleEdit}>
        <img
          className=" px-6 py-3 p-1 bg-gradient-to-r to-emerald-400 from-sky-400  rounded-xl"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAOxJREFUSEvt1T1KQ0EUhuEnxp9KsgjXodhKKgtBhECwtHYXrsDCRoMYQUy6bESwtNcmC1C8A+eCyr3JGBOrO9XMMPOej++cOdOywtFaIVsDr3S3seUAmxh/9WcZtnQxwhp28FIG+Cu8BLcLaB/Xy1J+iHtUglOQRZUfYxBWnOCuqhbr4NuRnDM8/7iYwLexVwuepfwC53jDPp4CdoqrmPdCfW17qlO+hUmAX7GHXVzmKM6plhTgAakipujgA0lxacvMpjovoRt4jADvhT1Hsc7q1PPgCbJePI6beCjDLGocyoH/hvftbAP//8/iExAVHxiFDbsYAAAAAElFTkSuQmCC"
        />
      </button>
    </div>
  ) : (
    <div className="mt-5 flex flex-wrap justify-center items-center gap-3 ">
      {Notetext.map((note) => {
        return (
          <div
            key={note.id}
            className="flex items-center justify-between flex-wrap p-4 flex-col gap-1 m-2 bg-gradient-to-r to-emerald-400 from-sky-400 rounded-xl"
          >
            <div
              className={`${
                note.completed && "line-through"
              } p-2  px-2 bg-transparent rounded-xl font-semibold`}
            >
              {note.text}
            </div>

            <div className="flex gap-2 justify-start">
              {!note.completed && (
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setNewText(note);
                  }}
                  className=" p-2 px-2 bg-transparent rounded-xl"
                >
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAATlJREFUSEu11d0qBVEUAODvhHKhxJU8hdyQv1CilAsv4g28gadwLSnuJH8v4K8kT0CUG9wxu/bUNM3MmZ/OvpvO7G+tWXutfXoGuHoDtHXBR3GEA1wUJdkWD/AZ1vGLDdzmA7TF5xP4GiMR/MYWbrIBmuKTmMYjtnGCIfxgswse4EtMJTVewTN2cBgDtS7LeIRn4me/YRkvCL99tT3QsDl0w2wOuEMarLCj+9W8DH7HAl6r5qQKr4LTmlfOYBk+hquCUoSMa8EhahEe4HPM5dL6xGLsklq3Rh4fjr0ahiS7PpIvWcNDLTW+lMcnEDLMrvC82hQuKksebw0X4aHepzHtP+zhvkkputwtjeL0G6JGWL8rN3TLUgcxzMFTur9OtzSJdZyc0W4Znj3QJmj6bvgD2S/D24Cle/4BvGU0GDoYpUAAAAAASUVORK5CYII=" />
                </button>
              )}

              <button
                className=" p-2 px-2 bg-transparent  rounded-xl"
                onClick={() => DeleteText(note.id)}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAP9JREFUSEvt1bFKA0EUheEvrSAY0FawEqtgEQtLH0AhTcBnsBLfQoiFT5A2IILWgp2kSiGRlGIjKIhYaSGYhTGMsOvuhmSr3PLuzL9nzt45WzPHqs2RrQj8FCcpIr7QxH2WwDx4Cxf/nO4J23hLWxPDl/ExA5t6aCecyuAzEP0Xkeb5Gl6meNM19uN9lcNX8RoUfKKPpTB2v8KSDz/AChqheTXuHZRR/ogNbOEh2niHXezhJvRL27KATxyNR3FhSzW2xJfoGYdYH897N5rzIY5C3HbKXKJ6Vj7n5M0lkvyfVNbPYoTNkuF1jLMi8J1w7MSOvPrGLc7xXgSeByz0/Ac+xlIYh8+7LwAAAABJRU5ErkJggg==" />
              </button>
              <button
                onClick={() => {
                  toggleCompletion(note.id);
                  handleCompleted();
                }}
                className="bg-transparent  rounded-xl p-2 px-2"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAUJJREFUSEvt1L8rrmEcBvDPO1CIEmWwya/Bpo5fRcqkjKIM/Bt+ZNAxyGqyOMvpHKWUyWBADExKYbAYDDYGznASz617eLyeV15lwVP3cD/3c1/X9b2+1/PN+cAn94HYvsEz3f1atvxAU7J+Z3gxhH/YCmfF2tKAQ9SgD7spgnbsoRQtOC8GvDoCN2IVoyngehyhFvOYKUZ5SVTZGUsexP8IXoUDtOaTvlX5X4zgGF24jcCBNPjbm0H6zPMybGIWO6mSfyYqp3GJ4OtV6qwQ6dMnaeXj+IUHTGIBE1jBDbpxgkrcYQpzuEBHHukL8PBiDMsox3Ys9z5JwUD0PIjZQGhuD64j6WnWL5rleYjRWrLa4oXhuA/bukjSHBvaj/1Ck7VQQ4P/S0nczrCYd7kiyfGfaNf6ayP7rWl519j/Bv9k8/wRzf44GAEaYb8AAAAASUVORK5CYII=" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoItem;

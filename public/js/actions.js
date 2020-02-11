const DeleteJob = () => {
  const id = document.querySelector("#delete-modal").getAttribute("data-id");
  const url = `/dashboard/${id}`;
  const job = document.getElementById(id);
  axios.delete(url).then(res => {
    console.log(res);
    job.remove();
  });
};

const EditJob = () => {
  const id = document.querySelector("#edit-modal").getAttribute("data-id");
  const url = `/dashboard/${id}`;
  const status = document.querySelector("#status").value;

  axios.put(url, { status: status }).then(res => {
    console.log(res);
  });
};

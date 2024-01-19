"use client";

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (event) => {
        const fileText = event.target.result;
        onFileUpload(fileText);
      };
    }
  };

  return (
    <div className="mt-4">
      <label className="flex items-center cursor-pointer">
        <span className="mr-2 text-light-text-color" id="upload-title">
          Choose File
        </span>
        <ion-icon
          name="cloud-upload-outline"
          class="text-light-text-color"
        ></ion-icon>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default FileUploader;

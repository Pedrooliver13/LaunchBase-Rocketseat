// mask , covertendo para moeda
const mask = {
  apply(input, func) {
    setTimeout(() => {
      input.value = mask[func](input.value);
    }, 1);
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "");

    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value / 100);
  }
};
const buttons = {
  // funcionalidades do botoes;
  apply(Dom, button, func) {
    button.addEventListener(`${Dom}`, buttons[func](button));
  },
  wantDelete(event) {
    const confirmation = confirm("Deseja Deletar?");
    if (!confirmation) {
      event.preventDefault();
    }
  },
  modalOverlay() {
    const modalOverlay = document.querySelector(".modal__overlay");
    const firstModalClose = document.querySelector("#firstModalClose i");

    modalOverlay.classList.toggle("active");

    if (!modalOverlay.classList.contains("active")) {
      firstModalClose.classList.add("hide");
    }
    if (modalOverlay.classList.contains("active")) {
      firstModalClose.classList.remove("hide");
    }
  }
};
// lógica de envio de imagens;
const PhotosUpload = {
  input: "",
  UploadLimit: 6,
  files: [],
  preview: document.querySelector("#photos-preview"),
  handleFileInput(event) {
    const { files: fileList } = event.target;
    PhotosUpload.input = event.target;

    if (PhotosUpload.hasLimit(event)) return;

    Array.from(fileList).map(file => {
      const reader = new FileReader();
      PhotosUpload.files.push(file);

      reader.onload = () => {
        const image = new Image(); // <img src>
        image.src = String(reader.result);

        const div = PhotosUpload.getContainer(image);

        PhotosUpload.preview.appendChild(div);
      };

      reader.readAsDataURL(file);
    });
  },
  getAllFiles() {
    const dataTransfer =
      new ClipboardEvent("").clipboardData || new DataTransfer(); // mozilla || chrome;
    PhotosUpload.files.forEach(file => dataTransfer.items.add(file));

    return dataTransfer.files;
  },
  hasLimit(event) {
    const { UploadLimit, input } = PhotosUpload;
    const { files: filesList } = input;

    if (filesList.length > UploadLimit) {
      alert(`Envie no máximo ${UploadLimit} fotos`);
      event.preventDefault();

      return true;
    }

    return false;
  },
  getContainer(image) {
    const div = document.createElement("div");
    div.classList.add("photo");

    div.onclick = PhotosUpload.removePhoto;

    div.appendChild(image);
    div.appendChild(PhotosUpload.removeButton());

    return div;
  },
  removeButton() {
    const button = document.createElement("i");
    button.classList.add("material-icons");
    button.innerHTML = "close";

    return button;
  },
  removePhoto(event) {
    const photoDiv = event.target.parentNode; // event.target = <i> // event.target.parentNode; = <div class="photo">
    const photoArray = Array.from(PhotosUpload.preview.children);

    const index = photoArray.indexOf(photoDiv);

    PhotosUpload.files.splice(index, 1);
    PhotosUpload.input.files = PhotosUpload.getAllFiles();

    return photoDiv.remove();
  },
  removeOldPhoto(event) {
    const photoDiv = event.target.parentNode; // <div class="photo">

    if (photoDiv.id) {
      const removedFiles = document.querySelector(
        'input[name="removed_files"]'
      );

      if (removedFiles) {
        removedFiles.value += `${photo.id},`;
      }
    }

    return photoDiv.remove();
  }
};
//funcionalidade da galeria;
const imageGallery = {
  highLight: document.querySelector(".gallery .highlight > img"),
  preview: document.querySelectorAll(".gallery-preview img"), //pegando todos para remover o class="active"
  setImage(event) {
    const { target } = event;

    imageGallery.preview.forEach(file => file.classList.remove("active")); //remove o active de todas as fotos
    target.classList.add("active"); // adiciona a foto apenas após o click;

    imageGallery.highLight.src = target.src;// como ele é uma img posso usar o src;// e trocamos pelo src que do event.target;
    LightBox.image.src = target.src;
  }
};

const LightBox = {
  target: document.querySelector(".lightbox-target"),
  image: document.querySelector(".lightbox-target > img"),
  closeButton: document.querySelector(".lightbox-target .lightbox-close"),
  open() {
    LightBox.target.style.opacity = 1;
    LightBox.target.style.top = 0;
    LightBox.target.style.bottom = 0;
    LightBox.closeButton.style.top = 0;
  },
  close() {
    LightBox.target.style.opacity = 0;
    LightBox.target.style.top = "100%";
    LightBox.target.style.bottom = "initial";
    LightBox.closeButton.style.top = "-80px";
  }
};


// MENU RESPONSIVO
let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');

menuToggle.addEventListener('click', ()=>{

  document.body.style.overflow = show ? 'hidden' : 'initial';

  menuSection.classList.toggle('on', show);

  show = !show;
})
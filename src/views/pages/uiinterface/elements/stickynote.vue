<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">
                Sticky Note<b-button
                  variant="primary float-sm-end m-l-10"
                  id="createsticky"
                  >Add New Note</b-button
                >
              </h5>
            </div>
            <div class="card-body">
              <div class="sticky-body">
                <div id="stickies-container"></div>
                <div class="sticky-form">
                  <label for="stickytitle">Sticky Title:</label>
                  <input type="text" name="stickytitle" id="stickytitle" />
                  <label for="stickytext">sticky Message:</label>
                  <textarea
                    name="stickytext"
                    id="stickytext"
                    cols="5"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sticky -->

        <!-- /Sticky -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Sticky Note",
    };
  },
  mounted() {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      const stickyArea = document.querySelector("#stickies-container");

      const createStickyButton = document.querySelector("#createsticky");

      const stickyTitleInput = document.querySelector("#stickytitle");
      const stickyTextInput = document.querySelector("#stickytext");

      const deleteSticky = (e) => {
        e.target.parentNode.remove();
      };

      let isDragging = false;
      let dragTarget;

      let lastOffsetX = 0;
      let lastOffsetY = 0;

      function drag(e) {
        if (!isDragging) return;

        // console.log(lastOffsetX);

        dragTarget.style.left = e.clientX - lastOffsetX + "px";
        // dragTarget.style.top = e.clientY - lastOffsetY + "px";
      }

      function createSticky() {
        const newSticky = document.createElement("div");
        const html = `<h3>${stickyTitleInput.value.replace(
          /<\/?[^>]+(>|$)/g,
          ""
        )}</h3><p>${stickyTextInput.value
          .replace(/<\/?[^>]+(>|$)/g, "")
          .replace(
            /\r\n|\r|\n/g,
            "<br />"
          )}</p><span class="deletesticky">&times;</span>`;
        newSticky.classList.add("drag", "sticky");
        newSticky.innerHTML = html;
        // newSticky.style.backgroundColor = randomColor();
        stickyArea.append(newSticky);
        positionSticky(newSticky);
        applyDeleteListener();
        clearStickyForm();
      }
      function clearStickyForm() {
        stickyTitleInput.value = "";
        stickyTextInput.value = "";
      }
      function positionSticky(sticky) {
        sticky.style.left =
          window.innerWidth / 2 -
          sticky.clientWidth / 2 +
          (-100 + Math.round(Math.random() * 50)) +
          "px";
        // sticky.style.top =
        //   window.innerHeight / 2 -
        //   sticky.clientHeight / 2 +
        //   (-100 + Math.round(Math.random() * 50)) +
        //   "px";
      }

      function editSticky() {}

      function stripHtml(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
      }

      function randomColor() {
        const r = 200 + Math.floor(Math.random() * 56);
        const g = 200 + Math.floor(Math.random() * 56);
        const b = 200 + Math.floor(Math.random() * 56);
        return "rgb(" + r + "," + g + "," + b + ")";
      }

      function applyDeleteListener() {
        let deleteStickyButtons = document.querySelectorAll(".deletesticky");
        deleteStickyButtons.forEach((dsb) => {
          dsb.removeEventListener("click", deleteSticky, false);
          dsb.addEventListener("click", deleteSticky);
        });
      }

      window.addEventListener("mousedown", (e) => {
        if (!e.target.classList.contains("drag")) {
          return;
        }
        dragTarget = e.target;
        dragTarget.parentNode.append(dragTarget);
        lastOffsetX = e.offsetX;
        lastOffsetY = e.offsetY;
        // console.log(lastOffsetX, lastOffsetY);
        isDragging = true;
      });
      window.addEventListener("mousemove", drag);
      window.addEventListener("mouseup", () => (isDragging = false));

      createStickyButton.addEventListener("click", createSticky);
      applyDeleteListener();
    });
  },
};
</script>
<style>
.sticky-body {
  position: relative;
}
.drag {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.sticky {
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: #00243f;
  cursor: grab;
  display: inline-block;
  padding: 1rem;
  position: absolute;
  width: 15.5rem;
}
.sticky h3,
.sticky p {
  color: #00243f;
  pointer-events: none;
}
.sticky h3 {
  border-bottom: dashed 2px #0085e8;
  margin: 0 0 1rem;
  min-height: 1.8rem;
  padding: 0 1.5rem 0.25rem 0;
}
.sticky p {
  margin: 0;
  min-height: 9rem;
}
.sticky .deletesticky {
  color: #0085e8;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 0.8rem;
  top: 0rem;
}

.sticky-form {
  bottom: 1rem;
}
.sticky-form label,
.sticky-form input,
.sticky-form textarea {
  color: #000;
  display: block;
}
.sticky-form input,
.sticky-form textarea {
  background-color: #f0f9ff44;
  background-clip: padding-box;
  border: 2px dashed #0065b3;
  border-radius: 0.25rem;
  color: #00243f;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  padding: 0.375rem 0.75rem;
  /* width: calc(100vh - 1.5rem); */
  width: 300px;
}
.sticky-form input:focus,
.sticky-form textarea:focus {
  border: 2px dashed #0065b3;
  background-color: #ffffff;
  outline: none;
}
</style>

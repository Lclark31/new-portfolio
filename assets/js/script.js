let toggled = true;

$(`.project-btn`).on(`click`, () => {
  event.preventDefault();

  if (toggled) {
    $(`.project-btn`).text(`Hide my work`);
    $(`.projects`).removeClass(`hidden`);
    toggled = false;
  } else {
    $(`.project-btn`).text(`View my work`);
    $(`.projects`).addClass(`hidden`);
    toggled = true;
  }
});

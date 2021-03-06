class ImageComparison {
    constructor(imagesContainerId) {
        this.imagesContainer = null;
        this.resizeElement = null;
        this.imageBefore = null;
        this.imageAfter = null;
        this.descLeft = null;
        this.descRight = null;

        this.uiSelectors = {
            imagesContainer: imagesContainerId,
            resizeElement: '[data-resize-element]',
            imageBefore: '[data-before-image]',
            imageAfter: '[data-after-image]',
            descLeft: '[data-desc-left]',
            descRight: '[data-desc-right]'
        };
    }

    initialize() {
        this.imagesContainer = document.getElementById(this.uiSelectors.imagesContainer);
        this.resizeElement = document.querySelector(this.uiSelectors.resizeElement);
        this.imageBefore = document.querySelector(this.uiSelectors.imageBefore);
        this.imageAfter = document.querySelector(this.uiSelectors.imageAfter);
        this.descLeft = document.querySelector(this.uiSelectors.descLeft);
        this.descRight = document.querySelector(this.uiSelectors.descRight);

        this.setInitialValues();

        this.imagesContainer.addEventListener('mousemove', event => this.changeResizeElementWidth(event));
    }

    changeResizeElementWidth(event) {
        const containerOffsetLeft = this.imagesContainer.offsetLeft;
        const mouseOffsetLeft = event.clientX;
        const resizeWidth = mouseOffsetLeft - containerOffsetLeft;

        this.resizeElement.style.width = `${resizeWidth}px`;

        this.checkDescriptionsVisible(resizeWidth);
    }

    checkDescriptionsVisible(imageWidth) {
        const containerHalfWidth = this.imagesContainer.offsetWidth / 2;

        if (imageWidth > containerHalfWidth) {
            this.descLeft.classList.remove('hide');
            this.descRight.classList.add('hide');
        } else {
            this.descRight.classList.remove('hide');
            this.descLeft.classList.add('hide');
        }
    }


    setInitialValues() {
        const width = this.imagesContainer.offsetWidth;

        this.imageAfter.style.width = `${width}px`;
        this.imageBefore.style.width = `${width}px`;
    }

}
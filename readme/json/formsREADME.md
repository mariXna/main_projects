JSON forms README.md

First of all define "title", "action" - path, "description",  and "method" - POST.


  "title": "",
  "action": "",
  "description": "",
  "method": "POST",
  "hideBlock": {
  "data": {
    "name1" : {
        "value1": [ "id_block1", "id_block2, ... ]
        "value2" : [ , ]
        ...
    }
  }
}
Then define "hideBlock" depending on user choices in every select block that influences next blocks.



For every choice (chosen "value") in each category there will be a sequence of blocks that appears on the screen.


Then define "defaultBlocks", this block that will appear the first on the screen.

"defaultBlocks": [
          "id1"
        ]

Then define "blocks", all blocks that will be used in this form.


 "blocks":[
        {
            "id": *number*,
            "title": "",
            "description": "",
            "columns": [
              {
                "name": "",
                "title": "",
                "required": boolean,
                "value": "",
                "type": "",
                "data": [
                  {
                    "title": "",
                    "label": "",
                    "value": "",
                    "disabled": boolean
                  }, 
                  ...,

                "buttons": [
              {
              "title": "",
              "type": "custom",
              "disabled": "onkey",
              "OnClick": "return *function*(this, *number of block*);"
                        }
                    ]
                ]
            }
        ]
    }
]

Each block with select, number, text input type should contain "id", "title", "description" and "columns" array. 
Each "column" contain "name", "title", "required"(if needed), "pattern" (if needed for errors indication), "suggestions" (if needed for displaying input options), "value", "type" and "data". "Data" contains "title", "label", "value", "disabled" (if needed). 
If block displays separately, buttons column can be added: "prev", "next" with function Prev or Next and button "Save" with type "submit".

Blocks with "textarea" or "file" type contain "id", "title" and "columns". "Columns" contain "name" , "required" (if needed).

{
                "id": *number*,
                "title": "",
                "columns": [
                  {
                    "name": "",
                    "required": boolean,
                    "type": "textarea"/"file",
                    "title": ""
                  },
                    ...
                ]
                }

For multichoice blocks contain "id", "title", "required" (if needed), "description", "columns" with "name", "type" and "title" + "buttons":

    "id": *number*,
    "title": "",
    "required": *boolean*,
    "description": "",
    "columns": [
      {
        "name": "",
        "type": "checkbox",
        "title": ""
      },
      ...
    ]

If form shows all blocks at the same time, buttons can be added as separate block at the end. "Buttons" contains "name" and "type" ("submit", "next", "prev") and "title".

{
                "id": *number*,
                "title": "",
                "buttons": [
                      {
                        "title": "Submit",
                        "type": "submit"
                      }
                ]
              }

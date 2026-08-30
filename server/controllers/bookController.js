const Book = require("../models/Books");

const getBooks = async(req, res)=>{
    try{
        const {status, tag} = req.query;

        const filter = {
            user: req.userId
        };

        if(status){
            filter.status = status;
        }

        if(tag){
            filter.tags = tag;
        }

        const books = await Book.find(filter).sort({
            createdAt:-1
        });

        res.status(200).json({
            books
        });
    }catch(err){
        res.status(500).json({
            message: error.message
        })
    }
};


const addBooks = async(req, res) =>{ 
    try{
        const {title, author, tags, status} = req.body;

        if(!title || !author){
           return res.status(400).json({
                message: "Title and Author not Found"
            })
        }

        const book = await Book.create({
            user: req.userId,
            title,
            author,
            tags: tags || [],
            status: status || "Want to read"
        })

        res.status(201).json({
            message: "BOOK ADD Successfully",
            book
        })
    } catch(err){
         res.status(500).json({
            message:  err.message
         });
    }
};

const updateBook = async(req, res) =>{
    try{
        const { title, author, tags, status} = req.body;

        const book = await Book.findOne({
            _id : req.params.id,
            user: req.userId
        });

        if(!book){
            return res.status(404).json({
                message: "Book not found"
            });
        }

        book.title = title ?? book.title;
        book.author = author ?? book.author;
        book.tags = tags ?? book.tags; 
        book.status = status ?? book.status;

        await book.save();

        res.status(200).json({
            message: "Book updated successfully",
            book
        });
    
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const deleteBook = async(req, res) =>{
    try{
        const book = await Book.findOneAndDelete({
            _id: req.params.id,
            user: req.userId
        }) ;  

        if(!book){
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book Deleted Successfully"
        });

    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};


const updateStatus = async(req, res) =>{
    try{
        const {status} =res.body;

        const  allowedStatus = [
            "Want to Read",
            "Reading",
            "Completed"
        ];

        if(!allowedStatus.includes(status)){
            return res.status(400).json({
                message: "Invalid Reading Status"
            });
        }

        const book = await Book.findOne({
        _id: req.params.id,
        user: req.userId
        });

        if(!book){
             return res.status(404).json({
                message: 'BOOK Not Found'
             });
        }

        book.status = status;

        await book.save();

        res.status(200).json({
            message: "Reading Status updated",
            book
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports ={ getBooks, addBooks, updateBook, deleteBook, updateStatus }
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validationError, setValidationError] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      const { name, description } = response.data.data; 

      setName(name ?? '');
      setDescription(description ?? '');
    } catch (error) {
      if (error.response) {
        Swal.fire({
          text: error.response.data.message,
          icon: 'error',
        });
      } else {
        Swal.fire({
          text: error.message,
          icon: 'error',
        });
      }
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();  
    formData.append('name', name);
    formData.append('description', description);

    await axios
      .post(`http://localhost:8000/api/products/update/${id}`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          text: data.message,
        });
        navigate('/');
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: 'error',
          });
        }
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Update Product</h4>
              <hr />

              <div className="form-wrapper">
                {Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger rounded-3">
                        <ul className="mb-0">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <Form onSubmit={updateProduct}>
                  <Row>
                    <Col>
                      <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="my-3">
                    <Col>
                      <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    variant="primary"
                    className="w-100 mt-3 py-2"
                    size="lg"
                    type="submit"
                  >
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
